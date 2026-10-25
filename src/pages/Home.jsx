import Footer from "../components/Footer"
import NavBarMain from "../components/NavBarMain"

export default function Home() {
    return (
        <>
            <NavBarMain />
            <h1 className="text-center font-bold text-4xl text-blue-700 font-itim">
                Welcome to SAU
            </h1>
            <h1 className="text-center font-bold text-xl text-red-700 font-kanit">
                สวัสดีครับทุกท่าน
            </h1>
            <hr className="my-5 w-[80%] mx-auto" />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore sint aspernatur modi mollitia fugiat dolor quae rem omnis enim nihil dolores ad unde laboriosam placeat ipsa, dolorem corrupti consectetur odio cupiditate molestias aliquam pariatur doloremque. Perspiciatis culpa necessitatibus, nobis expedita quos sed eveniet odio impedit quaerat quam! Sequi, aliquam cupiditate.
            </p>
            <h3 className="text-center font-charm my-5 font-bold">
                ยินดีต้อนรับทุกท่าน WOW WOW WOW
            </h3>
            <hr className="my-5 w-[80%] mx-auto" />
            <Footer />
        </>
    )
}