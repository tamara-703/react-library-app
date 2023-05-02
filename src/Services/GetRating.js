export default function GetRating({ rating }) {
  Math.round(rating);
  console.log("rating")
  console.log(rating)

  return (
    <div>
      <div>
        {rating === 5 ? (
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"
            alt="5 star" width="150px"
          />
        ) : (
          <div></div>
        )}
      </div>

      <div>
        {rating === 4 ? (
          <img
            src="https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg"
            alt="4 star" width="150px"
          />
        ) : (
          <div></div>
        )}
      </div>

      <div>
        {rating === 3 ? (
          <img
            src="https://www.clipartmax.com/png/middle/253-2532437_3-star-reviews-five-stars-rating.png"
            alt="3 star" width="150px"
          />
        ) : (
          <div></div>
        )}
      </div>

      <div>
        {rating === 2 ? (
          <img
            src="https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-two-2-star-rank-background-png-image_4833769.png"
            alt="2 star" width="150px"
          />
        ) : (
          <div></div>
        )}
      </div>

      <div>
        {rating === 1 ? (
          <img
            src="https://jenniferbresnick.files.wordpress.com/2015/04/1star.jpeg"
            alt="1 star" width="150px"
          />
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {rating === null || rating === undefined ? (
          <div>no rating found</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
