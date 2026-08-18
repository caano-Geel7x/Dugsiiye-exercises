const Techdaily = () => {
    return(
    <header><h1>techdaily</h1></header>
);}


const Post = () => {
    return (
        <div>
<h2>5 Tips for Better Sleep</h2>
<p>Avoid screens before bed, keep your room cool, and stick to a consistent sleep schedule. Small changes can make a big difference in your energy levels.</p>
</div>
    );}

    const Footer = () => {
        return (
            <b>© 2026 TechDaily</b>
        );}

const Blog = () => {
    return (
        <>
        <Techdaily />
        <Post />
        <Footer />
        </>

    );}

export default Blog;
