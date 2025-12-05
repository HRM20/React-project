import errorImage from "./img/nf-page.png";

export default function NotFound() {
  return (
    <div className="notfound">
      {/* بخش بالا: 4 [تصویر] 4 */}
      <div className="top">
        <div className="four">4</div>
        <div className="image">
          <img src={errorImage} alt="Not Found" />
        </div>
        <div className="four">4</div>
      </div>

      {/* بخش پایین: متن‌ها به صورت ستون */}
      <div className="message">
        <h1>! Sorry </h1>
        <p>.We couldn’t find what you were looking for</p>
        <p>:Try one of these pages</p>
        <div className="links">
          <a href="/contact">Contact Us</a>
          <a href="/about">About</a>
          <a href="/home">Home</a>
        </div>
      </div>
    </div>
  );
}