import { useEffect, useState } from "react"
import "./FriendGraphic.css"
import { Col, Form, Row } from "react-bootstrap"
import userService from "../../services/user.service"
import DiffGraphic from "../DiffGraphic/DiffGraphic"
import MetersGraphic from "../MetersGraphic/MetersGraphic"
import PitchesGraphic from "../PitchesGraphic/PitchesGraphic"
import PointsGraphic from "../PointsGraphic/PointsGraphic"

const FriendGraphic = ({ friends }) => {
    
    const [friendId, setFriendId] = useState()

    const handleInputChange = e => {
        const { value } = e.target
        setFriendId(value)
    }

    const[friendProfile, setFriendProfile] = useState({})

    useEffect(() => {
        friendId && loadFriendProfileInformation()
    }, [friendId])

    const loadFriendProfileInformation = () => {
        userService
            .getOneUser(friendId)
            .then(({ data }) => {
                setFriendProfile(data)
            })
            .catch(err => console.log(err))
    }

    console.log(friendProfile)

    useEffect(() => {
         friendProfile && getPitchByM()
         friendProfile && getPitchByDiff()
         friendProfile && getPointsByMonth()
         friendProfile && getMetersByMonth()
    }, [friendId, friendProfile])

    const [data, setData] = useState([])
    const [months, setMonths] = useState({
        'Ene': 0,
        'Feb': 0,
        'Mar': 0,
        'Abr': 0,
        'May': 0,
        'Jun': 0,
        'Jul': 0,
        'Ago': 0,
        'Sep': 0,
        'Oct': 0,
        'Nov': 0,
        'Dic': 0
    })

    const getPitchByM = () => {
        friendProfile.donePitches?.map(eachPitch => {
            if (new Date(eachPitch.date).getMonth() === 0) { setMonths(months.Ene += 1) }
            if (new Date(eachPitch.date).getMonth() === 1) { setMonths(months.Feb += 1) }
            if (new Date(eachPitch.date).getMonth() === 2) { setMonths(months.Mar += 1) }
            if (new Date(eachPitch.date).getMonth() === 3) { setMonths(months.Abr += 1) }
            if (new Date(eachPitch.date).getMonth() === 4) { setMonths(months.May += 1) }
            if (new Date(eachPitch.date).getMonth() === 5) { setMonths(months.Jun += 1) }
            if (new Date(eachPitch.date).getMonth() === 6) { setMonths(months.Jul += 1) }
            if (new Date(eachPitch.date).getMonth() === 7) { setMonths(months.Ago += 1) }
            if (new Date(eachPitch.date).getMonth() === 8) { setMonths(months.Sep += 1) }
            if (new Date(eachPitch.date).getMonth() === 9) { setMonths(months.Oct += 1) }
            if (new Date(eachPitch.date).getMonth() === 10) { setMonths(months.Nov += 1) }
            if (new Date(eachPitch.date).getMonth() === 11) { setMonths(months.Dic += 1) }

            setData([
                {
                    "months": "Ene",
                    "pitches": months.Ene,
                },
                {
                    "months": "Feb",
                    "pitches": months.Feb,
                },
                {
                    "months": "Mar",
                    "pitches": months.Mar,
                },
                {
                    "months": "Abr",
                    "pitches": months.Abr,
                },
                {
                    "months": "May",
                    "pitches": months.May,
                },
                {
                    "months": "Jun",
                    "pitches": months.Jun,
                },
                {
                    "months": "Jul",
                    "pitches": months.Jul,
                },
                {
                    "months": "Ago",
                    "pitches": months.Ago,
                },
                {
                    "months": "Sep",
                    "pitches": months.Sep,
                },
                {
                    "months": "Oct",
                    "pitches": months.Oct,
                },
                {
                    "months": "Nov",
                    "pitches": months.Nov,
                },
                {
                    "months": "Dic",
                    "pitches": months.Dic,
                }
            ])

        })
    }

    const [diffData, setDiffData] = useState([])
    const [diffPitches, setDiffPitches] = useState({
        "V": 0,
        "VI": 0,
        "VII": 0,
        "VIII": 0,
        "IX": 0
    })

    const getPitchByDiff = () => {
        friendProfile.donePitches?.map(eachPitch => {
            console.log(eachPitch.pitch.points)
            if (eachPitch.pitch.points <= 0.5) { setDiffPitches({ ...diffPitches, V: diffPitches.V += 1 }) }
            else if (eachPitch.pitch.points > 0.5 && eachPitch.pitch.points <= 2) { setDiffPitches({ ...diffPitches, VI: diffPitches.VI += 1 }) }
            else if (eachPitch.pitch.points > 2 && eachPitch.pitch.points <= 3.5) { setDiffPitches({ ...diffPitches, VII: diffPitches.VII += 1 }) }
            else if (eachPitch.pitch.points > 3.5 && eachPitch.pitch.points <= 5) { setDiffPitches({ ...diffPitches, VIII: diffPitches.VIII += 1 }) }
            else if (eachPitch.pitch.points > 5) { setDiffPitches({ ...diffPitches, IX: diffPitches.IX += 1 }) }

            setDiffData([
                {
                    "diff": "Vº grado",
                    "vias": diffPitches.V
                },
                {
                    "diff": "6º grado",
                    "vias": diffPitches.VI
                },
                {
                    "diff": "7º grado",
                    "vias": diffPitches.VII
                },
                {
                    "diff": "8º grado",
                    "vias": diffPitches.VIII
                },
                {
                    "diff": "9º grado",
                    "vias": diffPitches.IX
                }
            ])

        })
    }

    const [pointsData, setPointsData] = useState([])
    const [monthsPoints, setMonthsPoints] = useState({
        'Ene': 0,
        'Feb': 0,
        'Mar': 0,
        'Abr': 0,
        'May': 0,
        'Jun': 0,
        'Jul': 0,
        'Ago': 0,
        'Sep': 0,
        'Oct': 0,
        'Nov': 0,
        'Dic': 0
    })

    const getPointsByMonth = () => {
        friendProfile.donePitches?.map(eachPitch => {
            if (new Date(eachPitch.date).getMonth() === 0) { setMonthsPoints(monthsPoints.Ene += eachPitch.pitch.points) }
            if (new Date(eachPitch.date).getMonth() === 1) { setMonthsPoints(monthsPoints.Feb += eachPitch.pitch.points) }
            if (new Date(eachPitch.date).getMonth() === 2) { setMonthsPoints(monthsPoints.Mar += eachPitch.pitch.points) }
            if (new Date(eachPitch.date).getMonth() === 3) { setMonthsPoints(monthsPoints.Abr += eachPitch.pitch.points) }
            if (new Date(eachPitch.date).getMonth() === 4) { setMonthsPoints(monthsPoints.May += eachPitch.pitch.points) }
            if (new Date(eachPitch.date).getMonth() === 5) { setMonthsPoints(monthsPoints.Jun += eachPitch.pitch.points) }
            if (new Date(eachPitch.date).getMonth() === 6) { setMonthsPoints(monthsPoints.Jul += eachPitch.pitch.points) }
            if (new Date(eachPitch.date).getMonth() === 7) { setMonthsPoints(monthsPoints.Ago += eachPitch.pitch.points) }
            if (new Date(eachPitch.date).getMonth() === 8) { setMonthsPoints(monthsPoints.Sep += eachPitch.pitch.points) }
            if (new Date(eachPitch.date).getMonth() === 9) { setMonthsPoints(monthsPoints.Oct += eachPitch.pitch.points) }
            if (new Date(eachPitch.date).getMonth() === 10) { setMonthsPoints(monthsPoints.Nov += eachPitch.pitch.points) }
            if (new Date(eachPitch.date).getMonth() === 11) { setMonthsPoints(monthsPoints.Dic += eachPitch.pitch.points) }

            setPointsData([
                {
                    "months": "Ene",
                    "points": monthsPoints.Ene,
                },
                {
                    "months": "Feb",
                    "points": monthsPoints.Feb,
                },
                {
                    "months": "Mar",
                    "points": monthsPoints.Mar,
                },
                {
                    "months": "Abr",
                    "points": monthsPoints.Abr,
                },
                {
                    "months": "May",
                    "points": monthsPoints.May,
                },
                {
                    "months": "Jun",
                    "points": monthsPoints.Jun,
                },
                {
                    "months": "Jul",
                    "points": monthsPoints.Jul,
                },
                {
                    "months": "Ago",
                    "points": monthsPoints.Ago,
                },
                {
                    "months": "Sep",
                    "points": monthsPoints.Sep,
                },
                {
                    "months": "Oct",
                    "points": monthsPoints.Oct,
                },
                {
                    "months": "Nov",
                    "points": monthsPoints.Nov,
                },
                {
                    "months": "Dic",
                    "points": monthsPoints.Dic,
                }
            ])

        })
    }

    const [metersData, setMetersData] = useState([])
    const [monthsMeters, setMonthsMeters] = useState({
        'Ene': 0,
        'Feb': 0,
        'Mar': 0,
        'Abr': 0,
        'May': 0,
        'Jun': 0,
        'Jul': 0,
        'Ago': 0,
        'Sep': 0,
        'Oct': 0,
        'Nov': 0,
        'Dic': 0
    })

    const getMetersByMonth = () => {

        friendProfile.donePitches?.map(eachPitch => {
            if (new Date(eachPitch.date).getMonth() === 0) { setMonthsMeters(monthsMeters.Ene += eachPitch.pitch.meters) }
            if (new Date(eachPitch.date).getMonth() === 1) { setMonthsMeters(monthsMeters.Feb += eachPitch.pitch.meters) }
            if (new Date(eachPitch.date).getMonth() === 2) { setMonthsMeters(monthsMeters.Mar += eachPitch.pitch.meters) }
            if (new Date(eachPitch.date).getMonth() === 3) { setMonthsMeters(monthsMeters.Abr += eachPitch.pitch.meters) }
            if (new Date(eachPitch.date).getMonth() === 4) { setMonthsMeters(monthsMeters.May += eachPitch.pitch.meters) }
            if (new Date(eachPitch.date).getMonth() === 5) { setMonthsMeters(monthsMeters.Jun += eachPitch.pitch.meters) }
            if (new Date(eachPitch.date).getMonth() === 6) { setMonthsMeters(monthsMeters.Jul += eachPitch.pitch.meters) }
            if (new Date(eachPitch.date).getMonth() === 7) { setMonthsMeters(monthsMeters.Ago += eachPitch.pitch.meters) }
            if (new Date(eachPitch.date).getMonth() === 8) { setMonthsMeters(monthsMeters.Sep += eachPitch.pitch.meters) }
            if (new Date(eachPitch.date).getMonth() === 9) { setMonthsMeters(monthsMeters.Oct += eachPitch.pitch.meters) }
            if (new Date(eachPitch.date).getMonth() === 10) { setMonthsMeters(monthsMeters.Nov += eachPitch.pitch.meters) }
            if (new Date(eachPitch.date).getMonth() === 11) { setMonthsMeters(monthsMeters.Dic += eachPitch.pitch.meters) }

            setMetersData(
                [
                    {
                        "id": "meters",
                        "data": [
                            {
                                "x": "Ene",
                                "y": monthsMeters.Ene
                            },
                            {
                                "x": "Feb",
                                "y": monthsMeters.Feb
                            },
                            {
                                "x": "Mar",
                                "y": monthsMeters.Mar
                            },
                            {
                                "x": "Abr",
                                "y": monthsMeters.Abr
                            },
                            {
                                "x": "May",
                                "y": monthsMeters.May
                            },
                            {
                                "x": "Jun",
                                "y": monthsMeters.Jun
                            },
                            {
                                "x": "Jul",
                                "y": monthsMeters.Jul
                            },
                            {
                                "x": "Ago",
                                "y": monthsMeters.Ago
                            },
                            {
                                "x": "Sep",
                                "y": monthsMeters.Sep
                            },
                            {
                                "x": "Oct",
                                "y": monthsMeters.Oct
                            },
                            {
                                "x": "Nov",
                                "y": monthsMeters.Nov
                            },
                            {
                                "x": "Dic",
                                "y": monthsMeters.Dic
                            }
                        ]
                    }
                ]
            )
        })

    }
   

  

    return (
        <>
            <Form.Select className="formSelect" name="friend_id" onChange={handleInputChange} aria-label="Default select example">
                <option >Elija un amigo</option>
                {
                    friends.map(elm => {
                        return (<option value={elm._id}>{elm.username}</option>)
                    })
                }
            </Form.Select>

            <Row>
                            <Col lg="12" >
                                <div className="PitchesGraphic">
                                    {data.length !== 0 && <PitchesGraphic data={data} />}
                                </div>
                            </Col>
                             <Col lg="12">
                                <div className="PitchesGraphic">
                                    {data.length !== 0 && <DiffGraphic data={diffData} />}
                                </div>
                            </Col>
                           <Col lg="12">
                                <div className="smallGraphic">
                                    {data.length !== 0 && <PointsGraphic data={pointsData} />}
                                </div>
                            </Col>
                            <Col lg="12">
                                <div className="smallGraphic">
                                    {metersData.length !== 0 && <MetersGraphic data={metersData} />}
                                </div>
                            </Col> 
                        </Row> 
        </>
    )
}

export default FriendGraphic