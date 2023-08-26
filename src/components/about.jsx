import React from 'react';

function About() {
  return (
    <div>
      <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 24 }}>About Us</h1>
      <br />
      <img
        src="https://th.bing.com/th/id/OIP.JmjeLQffrV1Kv8PFCEb1tQHaDt?pid=ImgDet&rs=1" // Provide the actual image URL
        alt="About Us"
        style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}
      />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis vero similique tempore repellat laboriosam culpa
        pariatur non! Nostrum minus similique sit ratione maiores fugiat illo. Nemo error voluptatem ullam laboriosam, nulla
        at, quaerat maxime delectus exercitationem quasi quis facilis non officiis corporis provident pariatur reiciendis
        numquam sequi eligendi, beatae autem.
      </p>
    </div>
  );
}

export default About;
