import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
  render() {
    const entry = this.props.entry;

    return (
    <header class="masthead">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <div class="site-heading">
                    <h1>{entry.getIn(["data", "title"], "title")}</h1>
                    <span class="subheading">{entry.getIn(["data", "subtitle"], "")}</span>
                        <p class="post-meta">Posted by
                    <a href='/authors/{{ author | slug }}'> {entry.getIn(["data", "author"], "")} </a>
                    on {
                      format(
                        entry.getIn(["data", "date"], new Date()),
                        "dd MMM, yyyy"
                      )
                      }</p>
                </div>
            </div>
        </div>
    </div>
</header>)
  }
});

export default Post;
