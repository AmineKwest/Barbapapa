<?php
/**
 * Created by les Barbapapa.
 * User: wilder
 * Date: 27/06/18
 * Time: 16:20
 */

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\Routing\Annotation\Route;
use AppBundle\Entity\Attraction;

class AttractionController extends Controller
{



    /**
     * @Rest\View()
     * @Route("/attractions")
     * @Method({"GET"})
     */
    public function getAttractionsAction(Request $request)
    {

        $attractions = $this->get('doctrine.orm.entity_manager')
            ->getRepository('AppBundle:Attraction')
            ->findAll();

        if (empty($attractions)) {
            return new JsonResponse(['message' => 'Aucune attraction trouvée'], Response::HTTP_NOT_FOUND);
        }

        return $attractions;
    }


    /**
     * @Rest\View()
     * @Route("/attractions/{filter}", requirements={"filter"="[a-z\-\+\,\=]+\d+[a-z\-\+\,\=\d+]*"})
     * @Method({"GET"})
     */
    public function getAttractionsByFilterAction($filter, Request $request)
    {
        $filters = $this->filtersTranslation($filter);
        if(isset($filters['type'])){
            $filters['type'] = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Type')
                ->findByName($filters['type']);
        }
        if(isset($filters['risk'])){
            $filters['risk'] = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Risk')
                ->findByLevel($filters['risk']);
        }

        $attractions = $this->get('doctrine.orm.entity_manager')
            ->getRepository('AppBundle:Attraction')
            ->findBy($filters);

        if (empty($attractions)) {
            return new JsonResponse(['message' => 'Aucune attraction trouvée'], Response::HTTP_NOT_FOUND);
        }

        return $attractions;
    }

    private function filtersTranslation($filters)
    {
        $byCategory = explode("+",$filters);
        $result = [];
        foreach($byCategory as $value){
            $currentFilter = explode("=",$value);
            $result[$currentFilter[0]] = explode(",",$currentFilter[1]);
        }
        return $result;
    }


    /**
     * @Rest\View()
     * @Route("/attractions/{id}", requirements={"id"="\d+"})
     * @Method({"GET"})
     */
    public function getAttractionAction($id, Request $request)
    {

        $attraction = $this->get('doctrine.orm.entity_manager')
            ->getRepository('AppBundle:Attraction')
            ->find($id);

        if (empty($attraction)) {
            return new JsonResponse(['message' => 'Aucune attraction trouvée'], Response::HTTP_NOT_FOUND);
        }

        return $attraction;
    }
}