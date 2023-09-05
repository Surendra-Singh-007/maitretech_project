import "./Welcome.css"

import React from "react";

export const Welcome = () => {
  return (
    <div>
      <div id="welcome-container">
        <div class="container">
          <div id="heading">
            <h1>
              Welcome To <span>National Institute of Fine Arts </span>
            </h1>
          </div>
          <p>
            National Institute of Fine Arts (NIFA) is a national center for
            education in arts, fostering the excellence of emerging and
            established artists and advancing art to create a more human world.
            National Institute of Fine Arts&nbsp; (NIFA) was established by
            MRS&nbsp;RENU KHERA in Delhi and&nbsp;NCR of Delhi on July
            2005.&nbsp;Institute established another unit in Panna (M.P) which
            is affiliated to Raja Mansingh Music and Arts University (Gwalior).
            Its aim is to provide education and training to students on a wide
            spectrum of Fine Arts.
          </p>

          <p>
            National Institute of Fine Arts<strong>&nbsp;</strong>is a place
            where the creative expression of individuals is nurtured and a sense
            of community flourishes. We seek to shape the global future of arts
            with an emphasis on excellence that allows its members to reach for
            the highest artistic standards as individuals while recognizing that
            the Art&nbsp;is&nbsp;one of the foundations of a healthy and
            creative society. This is a place where national and international
            leaders in the arts gather, teach, show and perform their work. The
            institute&nbsp;prides itself on its openness and on creating an
            environment that is safe, welcoming, and built on mutual respect.
          </p>

          <p>
            <strong>
              National Institute of Fine Arts&nbsp;is a place where the creative
              expression of individuals is nurtured and a sense of community
              flourishes.
            </strong>
          </p>
          <button
            type="button"
            class="btn btn-outline"
            onclick="window.location.href='about-us.php'"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
