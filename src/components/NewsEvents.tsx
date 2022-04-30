import newsData from "../data/news.json";
function NewsEvents() {
  return (
    <section className="newsEvents_wrapper">
      <div className="news_wrapper">
        <div className="title">
          <h1>News & Events</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit massa enim.az
          </p>
        </div>
        <div className="news_feed">
          {newsData.map((item, indx) => {
            return (
              <div className="news" key={indx}>
                <h1>{item.title}</h1>
                <h4>{item.date}</h4>
                <p>
                  {item.dec}
                </p>
                <h4>{item.persion}</h4>
              </div>
            );
          })}
        </div>
        <button className="btn">VIEW MORE</button>
      </div>
    </section>
  );
}

export default NewsEvents;
