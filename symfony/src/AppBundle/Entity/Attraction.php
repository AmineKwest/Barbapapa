<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Attraction
 *
 * @ORM\Table(name="attraction")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\AttractionRepository")
 */
class Attraction
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="photo", type="string", length=255)
     */
    private $photo;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="opening_time", type="datetime")
     */
    private $openingTime;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="closure_time", type="datetime")
     */
    private $closureTime;

    /**
     * @var int
     *
     * @ORM\Column(name="age_minimum", type="integer")
     */
    private $ageMinimum;

    /**
     * @var int
     *
     * @ORM\Column(name="avg_waiting_time", type="integer")
     */
    private $avgWaitingTime;

    /**
     * @var int
     *
     * @ORM\Column(name="price", type="integer", nullable=true)
     */
    private $price;

    /**
     * @var int
     *
     * @ORM\Column(name="capacity", type="integer", nullable=true)
     */
    private $capacity;

    /**
     * @var int
     *
     * @ORM\Column(name="victime_number", type="integer", nullable=true)
     */
    private $victimeNumber;

    /**
     * @var Type
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Type", inversedBy="id" )
     * @ORM\JoinColumn(nullable=false)
     */
    private $type;

    /**
     * @var Risk
     *
     * @ORM\Column(name="risk_id", type="integer")
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Risk", inversedBy="id" )
     * @ORM\JoinColumn(nullable=false)
     */
    private $risk;


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
     * Set name
     *
     * @param string $name
     *
     * @return Attraction
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set photo
     *
     * @param string $photo
     *
     * @return Attraction
     */
    public function setPhoto($photo)
    {
        $this->photo = $photo;

        return $this;
    }

    /**
     * Get photo
     *
     * @return string
     */
    public function getPhoto()
    {
        return $this->photo;
    }

    /**
     * Set openingTime
     *
     * @param \DateTime $openingTime
     *
     * @return Attraction
     */
    public function setOpeningTime($openingTime)
    {
        $this->openingTime = $openingTime;

        return $this;
    }

    /**
     * Get openingTime
     *
     * @return \DateTime
     */
    public function getOpeningTime()
    {
        return $this->openingTime;
    }

    /**
     * Set closureTime
     *
     * @param \DateTime $closureTime
     *
     * @return Attraction
     */
    public function setClosureTime($closureTime)
    {
        $this->closureTime = $closureTime;

        return $this;
    }

    /**
     * Get closureTime
     *
     * @return \DateTime
     */
    public function getClosureTime()
    {
        return $this->closureTime;
    }

    /**
     * Set ageMinimum
     *
     * @param integer $ageMinimum
     *
     * @return Attraction
     */
    public function setAgeMinimum($ageMinimum)
    {
        $this->ageMinimum = $ageMinimum;

        return $this;
    }

    /**
     * Get ageMinimum
     *
     * @return int
     */
    public function getAgeMinimum()
    {
        return $this->ageMinimum;
    }

    /**
     * Set avgWaitingTime
     *
     * @param integer $avgWaitingTime
     *
     * @return Attraction
     */
    public function setAvgWaitingTime($avgWaitingTime)
    {
        $this->avgWaitingTime = $avgWaitingTime;

        return $this;
    }

    /**
     * Get avgWaitingTime
     *
     * @return int
     */
    public function getAvgWaitingTime()
    {
        return $this->avgWaitingTime;
    }

    /**
     * Set price
     *
     * @param integer $price
     *
     * @return Attraction
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return int
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set capacity
     *
     * @param integer $capacity
     *
     * @return Attraction
     */
    public function setCapacity($capacity)
    {
        $this->capacity = $capacity;

        return $this;
    }

    /**
     * Get capacity
     *
     * @return int
     */
    public function getCapacity()
    {
        return $this->capacity;
    }

    /**
     * Set victimeNumber
     *
     * @param integer $victimeNumber
     *
     * @return Attraction
     */
    public function setVictimeNumber($victimeNumber)
    {
        $this->victimeNumber = $victimeNumber;

        return $this;
    }

    /**
     * Get victimeNumber
     *
     * @return int
     */
    public function getVictimeNumber()
    {
        return $this->victimeNumber;
    }

    /**
     * @return Type
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param Type $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * @return Risk
     */
    public function getRisk()
    {
        return $this->risk;
    }

    /**
     * @param Risk $risk
     */
    public function setRisk($risk)
    {
        $this->risk = $risk;
    }
}

