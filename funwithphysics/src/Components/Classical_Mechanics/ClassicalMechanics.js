import React from 'react'
import { Card } from 'react-bootstrap'
import './classicalMechanics.css'
import Topics from "./topics_data"
import { Link } from "react-router-dom"
import {Helmet} from "react-helmet"

export default function ClassicalMechanics() {
    return (
       <> 
        <Helmet>
          <title>Classical Mechanics | physics | Tech N Science</title>
          <meta name="description" content="Explore the Classical Mechanics section and try out the calculators."/>
          <meta name="keywords" content="Classical Mechanics, calculator, physics, Tech n science, technscience, tech and science"/>
        </Helmet>
        <div className="mech__main">
            <div className="mech__header">
                <h1>Classical Mechanics-Topics</h1>
            </div>
            <div className="mech__topics-card">
                {
                    Topics.map(data =>
                        <React.Fragment key={data.topic}>
                            <Card key={data.topic} style={{ width:'18rem' }}>

                                <Card.Body>
                                    {
                                        data.details === undefined ?
                                            <Link className="btn" disabled={true} to={`/classicalmechanics/calc/${data.topic}`} variant="outline-dark"> {data.topic}</Link> :
                                            <Link className="btn" to={`/classicalmechanics/calc/${data.topic}`} variant="outline-dark"> {data.topic}</Link>
                                            
                                    }
                                    <div style={{ padding: "0.3em" }}>
                                        {
                                            data.details === undefined ? <Card.Text> Will be <span style={{ fontWeight: "bold", color: "#19165b" }}>available</span> soon...</Card.Text> : <Card.Text>{" "}</Card.Text>
                                        }
                                    </div>
                                </Card.Body>
                            </Card>
                        </React.Fragment>
                    )
                }
            </div>
        </div>
      </>
    )
}