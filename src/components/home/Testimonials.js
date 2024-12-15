const testimonialsData = [
  {
    text: "I was looking for a website that reflected the quality and professionalism of my car wash business, and they delivered exactly what I needed. The Seattle Pixels team created a sleek, modern design that not only looks great but also functions seamlessly. It was a smooth and collaborative process, and I am very happy with the results.",
    name: "Mushtak, Kent, USA",
    profilePic:
      "https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg",
  },
  {
    text: "Seattle Pixels completely transformed my small business with their innovative approach. The design solutions they offered not only look amazing but are also highly effective in attracting customers. I'm thrilled with the results!",
    name: "Michael, USA",
    profilePic:
      "https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400021/121859823-male-avatar-icon-or-portrait-handsome-young-man-face-with-beard-vector-illustration.jpg",
  },
  {
    text: "Seattle Pixels has taken my e-commerce website to the next level. Their modern techniques have improved user experience and conversion rates. The team Seattle Pixels is a game-changer in the web design industry",
    name: "Lisa, USA",
    profilePic:
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/1d52d65a-d57f-4b68-b9fe-d7741ff6656c/4c4421c7-822a-46b9-8016-7c057f326af3.png",
  },
];

function Testimonials() {
  return (
    <>
      <div className="grid place-items-center w-full ">
        <div className="max-w-6xl px-4 py-24 content-center justify-center">
          <h1 className="text-3xl  text-center font-bold">Testimonials</h1>
          <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
            {testimonialsData.map((t, k) => {
              return (
                <div key={k} className="card w-full bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      className="mask w-20 h-20 mask-circle object-cover"
                      src={t.profilePic}
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <p>{t.text}</p>
                    <p className="text-slate-500">-{t.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
