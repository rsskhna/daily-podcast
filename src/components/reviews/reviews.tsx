import {reviewInfo} from "../../services/data/reviews";


const reviewCards = reviewInfo.map(
    (info, index) => {
        return (
            <li key={index}>
                <p>"</p>
                <p>{info.text}</p>

                
            </li>
        )
    }
)

export const Reviews = () => {
    return (
        <section>
            <h2></h2>
            <p></p>

            <ul></ul>
        </section>
    )
}