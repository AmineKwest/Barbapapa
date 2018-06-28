<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use FOS\RestBundle\View\ViewHandler;
use FOS\RestBundle\View\View; // Utilisation de la vue de FOSRestBundle
use AppBundle\Entity\Attraction;

class SearchController extends Controller
{

    /**
     * @Rest\View()
     * @Rest\Get("/search")
     */
    public function getSearchsAction(Request $request)
    {
        $searchs = $this->get('doctrine.orm.entity_manager')
            ->getRepository('AppBundle:Attraction')
            ->findAll();
        /* @var $searchs Attraction[] */

        $formatted = [];
        foreach ($searchs as $search) {
            $formatted[] = [
                'id' => $search->getId(),
                'name' => $search->getName(),
            ];
        }

        // Création d'une vue FOSRestBundle
        $view = View::create($formatted);
        $view->setFormat('json');

        return $view;
    }
}