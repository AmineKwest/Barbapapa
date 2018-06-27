<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Risk
 *
 * @ORM\Table(name="risk")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\RiskRepository")
 */
class Risk
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Attraction", mappedBy="risk" )
     * @ORM\JoinColumn(nullable=false)
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="Level", type="string", length=255)
     */
    private $level;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set level
     *
     * @param string $level
     *
     * @return Risk
     */
    public function setLevel($level)
    {
        $this->level = $level;

        return $this;
    }

    /**
     * Get level
     *
     * @return string
     */
    public function getLevel()
    {
        return $this->level;
    }
}

