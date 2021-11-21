import "./GiftsList.css";
// import { Link } from 'react-router-dom'
// import axios from 'axios';
// import { useEffect, useState } from 'react'

function GiftsList() {








  return (
    <div className="container">
      <section className="content">
        <img
          src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <div className="content-text">
          <h2 className="mt-1">Notebook</h2>
          <p className="text-description">
            Craft notebook for you to gift your friends and family. It's
            super easy and fun to make
          </p>
          <p className="text-bold">Price: $$$ <br/> Skill Level: Beginner </p>
        </div>
      </section>
    </div>
  );
}

export default GiftsList;
