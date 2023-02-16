import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Mumbai,Kolkata,New Delhi"
  );
  console.log(data);
  console.log(loading)

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11bWJhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1589041127168-9b1915731dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a29sa2F0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kolkata</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>New Delhi</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
