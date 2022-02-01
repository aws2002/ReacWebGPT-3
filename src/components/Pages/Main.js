import React from "react"
import GetStarted from "../Sections/GetStarted"
import Blog from "../Sections/Blog"
import Possibility from "../Sections/Possibility"
import Brand from "../Sections/Brand"
import Future from "../Sections/Future"
import About from "../Sections/About"
export default function Main() {
    return (
        <main>
            <Brand/>
            <About/>
            <Future/>
            <Possibility/>
            <GetStarted/>
            <Blog/>
        </main>
    )
}