<?php
/**
 * Created by les Barbapapa.
 * User: wilder
 * Date: 27/06/18
 * Time: 16:20
 */

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations as Rest;

class AttractionController extends Controller
{
    /**
     * @Rest\View()
     * @Get("/attractions")
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
     * @Get("/attractions/{id}")
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