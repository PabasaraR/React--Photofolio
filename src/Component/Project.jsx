import React from "react";
import "./Project.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectComponent from "./ProjectComponent";

export default function Project() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="projectBody">
      <h1 className="projectPageHead">My Projects</h1>
      <div className="ProjectCenter">
        <Carousel responsive={responsive}>
          <div className="padin">
            <ProjectComponent
              name="Food ordering website"
              description="This is a full functional food-ordering website developed using MERN Stack. This is made for users and admins.Here is a separate profile for users and admins.
              In this web site, admin has the ability to post and edit post on food items for sale, and can also delete posted post
              User can view details of food productions on the website and add to user's cart and remove product from cart"
              technology="MERN stack"
            />
          </div>
          <div className="padin">
            <ProjectComponent
              name="Text post publishing website"
              description="This is a website developed with MERN stack with simple CRUD operatin
              In this site, all visitors can see all the current posts. And they can add,edit and delete posts"
              technology="MERN stack"
            />
          </div>
          <div className="padin">
            <ProjectComponent
              name="Simple text analyze project "
              description="This is a small Python project made to identify the emotion in pharagraphs.It is developed using
              Python and nltk.sentiment.vader library. This will tell whether the required passage is negative or positive or neutral "
              technology="Python,nltk library"
            />
          </div>

          <div className="padin">
            <ProjectComponent
              name="Bulk purchasein eCommerce website(group project)"
              description="This is a full functional eCommerce website website developed using MERN Stack. This is made by buyer and seller.Here is a separate profile for buyer and seller.
              In this web site, seller has the ability to post and edit post on bulk product for sale, and can also delete posted product.Similary, the buyer can view the details of the products
              he wants through this website and if he wants to buy it,he can join the queue related to the product and then when he does not want to buy it, he can lave to  queue. Also there is a 
              realtime chat facility to exchange messages with all the users in this website"
              technology="MERN stack,Socket.IO"
            />
          </div>

          <div className="padin">
            <ProjectComponent
              name="Online Shopping System(Java)"
              description="The objective of this project is to develop an object-oriented program to manage an online shopping system. The system will consist of
               both a console interface for managerial tasks and a graphical user interface (GUI) for user interaction."
              technology="Java,Java Swing"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
