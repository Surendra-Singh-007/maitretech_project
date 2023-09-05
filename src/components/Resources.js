import "./Resources.css";
import React from "react";

export const Resources = () => {
  return (
    <div>
      <section class="container-fluid downapp">
        <div class="container">
          <div class="row onclassec">
            <div class="col-md-5">
              <div class="lmore-content">
                <h2>Online Classes</h2>
                <p>
                  Dear Students/Parents, Nifa presents its Learning App for your
                  regular art practice in which we have added many amazing
                  features Like: Step-by-step recorded demo videos prepared by
                  your faculty members. Regular assessment of your practise
                  through assignment section. Live class section from same app.
                  Attendance, payment invoice, art news, announcements,
                  important information and direct connect with the management
                  team are some more features. So hurry up n join now to
                  experience personalised coaching by experts sitting at your
                  home.
                </p>
                <p>We wish u Happy Learning. Stay Safe n Healthy.</p>
                <button
                  type="button"
                  class="btn btn-outline"
                  onclick="window.location.href='download-mobile-app.php'"
                >
                  Read More
                </button>

                <p class="nfothed">Download the app</p>
                <ul class="list-inline nappimg">
                  <li class="list-inline-item">
                    <a href="https://play.google.com/store/apps/details?id=co.thanos.fljvr">
                      <img
                        src="https://i1.wp.com/www.bagel-labs.com/wp-content/uploads/2016/12/Google-Play-Button_resize.png?ssl=1"
                        class="img-responsive"
                      />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://apps.apple.com/us/app/apple-store/id1472483563">
                      <img
                        src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png"
                        class="img-responsive"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-7">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0"
                  frameborder="0"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
