import React, { useEffect } from "react"
import SmurfCard from "./SmurfCard"
import { connect } from "react-redux"
import { fetchSmurfs } from "../actions/index"

const SmurfList = (props) => {

    useEffect(() => {
        props.fetchSmurfs()
        console.log(props.smurfs)
    }, [])

    return (
        <div className="smurfList">
            {props.smurfs.map(smurf => {
                return <SmurfCard smurf={smurf}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList)