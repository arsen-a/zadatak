<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/posts"
              >Posts <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/new-post">New Post</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
