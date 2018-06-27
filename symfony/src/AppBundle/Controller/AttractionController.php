<?php
/**
 * Created by les Barbapapa.
 * User: wilder
 * Date: 27/06/18
 * Time: 16:20
 */

namespace AppBundle\Controller;

use AppBundle\Entity\Attraction;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;

class AttractionController extends Controller
{
    /**
     * @Route("/attractions", name="attractions_list")
     * @Method({"GET"})
     */
    public function getPlacesAction(Request $request)
    {

        $attractions = $this->get('doctrine.orm.entity_manager')
            ->getRepository('AppBundle:Attraction')
            ->findAll();

        $attractions =[];

        if (empty($attractions)) {
            return new JsonResponse(['message' => 'Aucune attraction trouvée'], Response::HTTP_NOT_FOUND);
        }

        $formatted = [];
        foreach ($attractions as $attraction) {
            $formatted[] = [
                'id' => $attraction->getId(),
                'name' => $attraction->getName()
            ];
        }

        return new JsonResponse($formatted);
    }
}