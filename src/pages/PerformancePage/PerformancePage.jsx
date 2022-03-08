import { useContext, useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import DiffGraphic from "../../components/DiffGraphic/DiffGraphic"
import FriendGraphic from "../../components/FriendGraphic/FriendGraphic"
import MetersGraphic from "../../components/MetersGraphic/MetersGraphic"
import PitchesGraphic from "../../components/PitchesGraphic/PitchesGraphic"
import PointsGraphic from "../../components/PointsGraphic/PointsGraphic"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"
import "./PerformancePage.css"

const PerformancePage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const [userProfile, setUserProfile] = useState({})
    

    useEffect(() => {
        user && loadProfileInformation()
    }, [user])

    useEffect(() => {
        userProfile && getPitchByM()
        userProfile && getPitchByDiff()
        userProfile && getPointsByMonth()
        userProfile && getMetersByMonth()
    }, [userProfile])

    const loadProfileInformation = () => {

        userService
            .getOneUser(user._id)
            .then(({ data }) => {
                setUserProfile(data)
            })

            .catch(err => console.log(err))

    }


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
        userProfile.donePitches?.map(eachPitch => {
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
        userProfile.donePitches?.map(eachPitch => {
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

        userProfile.donePitches?.map(eachPitch => {
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

        userProfile.donePitches?.map(eachPitch => {
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

    const [showFriend, setShowFriend] = useState(false)

    const toggleShowFriend = () => {
        setShowFriend(!showFriend)
    }

    



    return (

        <Container>
            <h1>Hola {userProfile && userProfile.username}</h1>
            {!showFriend ? <Button onClick={toggleShowFriend}>Mostrar amigo</Button>
                : <Button onClick={toggleShowFriend}>Ocultar amigo</Button>
            }
            

            {!showFriend ?
                <Row>
                    <Col>
                        <Row>
                            <Col lg="8">
                                <div className="PitchesGraphic">
                                    {data.length !== 0 && <PitchesGraphic data={data} />}
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="PitchesGraphic">
                                    {data.length !== 0 && <DiffGraphic data={diffData} />}
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className="smallGraphic">
                                    {data.length !== 0 && <PointsGraphic data={pointsData} />}
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className="smallGraphic">
                                    {metersData.length !== 0 && <MetersGraphic data={metersData} />}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                   
                </Row>
                :
                <Row>
                    <Col lg="6">
                        <Row>
                            <Col lg="12">
                                <div className="PitchesGraphic">
                                    {data.length !== 0 && <PitchesGraphic data={data} />}
                                </div>
                            </Col>
                            <Col lg="12">
                                <div className="PitchesGraphic">
                                    {data.length !== 0 && <DiffGraphic data={diffData} />}
                                </div>
                            </Col>
                            <Col lg="12" >
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
                    </Col>

                    <Col lg="6">
                        <FriendGraphic friends={userProfile.friends}/>
                    </Col>
                </Row>
            }

        </Container >

    )
}

export default PerformancePage