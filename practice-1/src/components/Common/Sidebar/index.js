import {
    LeftSidebar,
    BrandTitle,
    BrandName,
    Brand
} from './styles'

function SideBar() {

    return (
        <LeftSidebar>
            <BrandTitle>
                Brand
            </BrandTitle>
            <BrandName>
                <Brand>nike</Brand>
                <Brand>adidas</Brand>
                <Brand>mlb</Brand>
                <Brand>pero</Brand>
            </BrandName>

        </LeftSidebar>
    )
}
export default SideBar
