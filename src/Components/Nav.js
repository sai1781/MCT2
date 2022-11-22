// import { useState } from "react"
import { useDispatch } from 'react-redux'
import { setValue1 } from "../slice"
import { setValue2 } from "../slice"
import { setValue3 } from "../slice"
import { setValue4 } from "../slice"
import { useSelector } from 'react-redux'
import { useRef } from 'react'

const Nav = _ => {
    const ref = useRef();
    const ref1 = useRef();
    const ref2 = useRef();
    const dispatch = useDispatch();
    const value1 = useSelector(state => state.input1)

    console.log(value1)
    // const [edit, setEdit] = useState("AllowEdit")
    // const [fontSize, setFontSize] = useState(12)
    // const [fontColor, setFontColor] = useState("black")
    // const [monospace, setMonoSpace] = useState("monospace")
    const hide = _ => {
        if (value1 !== "Not Allowing Edit") {
            ref.current.disabled = true;
            ref1.current.disabled = true;
            ref2.current.disabled = true;
            ref.current.className = "button disabled";
            ref1.current.className ="button disabled";
            ref2.current.className = "button disabled";
            
            
        } else {
            ref.current.className = "button";
            ref1.current.className ="button";
            ref2.current.className = "button";
            ref.current.disabled = false;
            ref1.current.disabled = false;
            ref2.current.disabled = false;
        }
    }

    return (
        <div className='nav' >
            <select className='button' onChange={(e) => {
                hide()
                dispatch(setValue1(e.target.value))
            }}>
                <option >Allow Edit</option>
                <option >Not Allowing Edit</option>

            </select>
            <select className='button' ref={ref} onChange={(e) => {

                dispatch(setValue2(e.target.value))

            }}>
                <option >Black</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Red</option>
            </select>
            <select className='button' ref={ref1} onChange={(e) => {
                dispatch(setValue3(e.target.value)); console.log(e.target.value)

            }}>
                <option>16</option>
                <option>2</option>
                <option>4</option>
                <option>8</option>
                <option>10</option>
                <option>12</option>
                <option>16</option>
                <option>18</option>
                <option>20</option>
                <option>22</option>
                <option>24</option>
                <option>26</option>
                <option>28</option>
            </select>
            <select className='button' ref={ref2} onChange={(e) => {
                dispatch(setValue4(e.target.value))

            }}>
                <option value="'Yanone Kaffeesatz', sans-serif" >monospace</option>
                <option value="'BhuTuka Expanded One', cursive">BhuTuka </option>
                <option value="'Roboto Mono', monospace">Roboto Mono</option>


            </select>
        </div>
    )
}

export default Nav;

