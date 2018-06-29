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
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="photo", type="string", length=255)
     */
    private $photo;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="opening_time", type="time")
     */
    private $openingTime;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="closure_time", type="time")
     */
    private $closureTime;

    /**
     * @var int
     *
     * @ORM\Column(name="age", type="integer")
     */
    private $age;

    /**
     * @var int
     *
     * @ORM\Column(name="waitingtime", type="integer")
     */
    private $waitingtime;

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
     * @ORM\Column(name="victims", type="integer")
     */
    private $victims;

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
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Risk", inversedBy="id" )
     * @ORM\JoinColumn(nullable=false)
     */
    private $risk;

    /**
     * @var float
     *
     * @ORM\Column(name="lat", type="float")
     */
    private $lat;

    /**
     * @var float
     *
     * @ORM\Column(name="long", type="float")
     */
    private $long;

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
     * @param integer $age
     *
     * @return Attraction
     */
    public function setAge($age)
    {
        $this->age = $age;

        return $this;
    }

    /**
     * Get ageMinimum
     *
     * @return int
     */
    public function getAge()
    {
        return $this->age;
    }

    /**
     * Set avgWaitingTime
     *
     * @param integer $waitingtime
     *
     * @return Attraction
     */
    public function setWaitingtime($waitingtime)
    {
        $this->waitingtime = $waitingtime;

        return $this;
    }

    /**
     * Get avgWaitingTime
     *
     * @return int
     */
    public function getWaitingtime()
    {
        return $this->waitingtime;
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
     * Set victims
     *
     * @param integer $victims
     *
     * @return Attraction
     */
    public function setVictims($victims)
    {
        $this->victims = $victims;

        return $this;
    }

    /**
     * Get victims
     *
     * @return int
     */
    public function getVictims()
    {
        return $this->victims;
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

    public function isCompliant($filters)
    {
        $age = (isset($filters['age']))
            ? ($filters['age'][0] <= $this->age && $this->age <= $filters['age'][1])
            : true;
        $price = (isset($filters['price']))
            ? ($filters['price'][0] <= $this->price && $this->price <= $filters['price'][1])
            : true;
        $waitingtime = (isset($filters['waitingtime']))
            ? ($filters['waitingtime'][0] <= $this->waitingtime && $this->waitingtime <= $filters['waitingtime'][1])
            : true;
        $victims = (isset($filters['victims']))
            ? ($filters['victims'][0] <= $this->victims && $this->victims <= $filters['victims'][1])
            : true;
        $capacity = (isset($filters['capacity']))
            ? ($filters['capacity'][0] <= $this->capacity && $this->capacity <= $filters['capacity'][1])
            : true;

        return (
            $age
            && $price
            && $waitingtime
            && $victims
            && $capacity
        );
    }

    /**
     * @return float
     */
    public function getLat()
    {
        return $this->lat;
    }

    /**
     * @param float $lat
     */
    public function setLat($lat)
    {
        $this->lat = $lat;
    }

    /**
     * @return float
     */
    public function getLong()
    {
        return $this->long;
    }

    /**
     * @param float $long
     */
    public function setLong($long)
    {
        $this->long = $long;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }
}

