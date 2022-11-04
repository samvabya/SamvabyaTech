import React from 'react'
import './index.css';


export default function Profile() {
  return (
    <div>
      <div class="text-center">
            <img src="https://i.postimg.cc/W325Ff25/Add-Text-11-02-06-43-42.png" class="rounded" alt="..."/>
            <h1 class="display-1"><b>Samvabya Sarkar</b></h1>
          </div>
          
          <div class="xcard">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <a href="https://www.codechef.com/users/samvabya"><h5 class="card-title"><span class="badge bg-secondary">2⭐</span>Codechef</h5></a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <a href="https://github.com/samvabya"><h5 class="card-title">Github</h5></a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <a href="https://www.linkedin.com/in/samvabya-sarkar-105191249/"><h5 class="card-title">LinkedIn</h5></a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <a href="mailto:samvabyat1@gmail.com"><h5 class="card-title">Mail</h5></a>
                    </div>
                  </div>
                </div>
                <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <a href="https://www.instagram.com/samvabya/"><h5 class="card-title">Instagram</h5></a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
