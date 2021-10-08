let posts = [
    {
        'icon': 'img/beard-1845166_640.jpg',
        'author': 'Adriano',
        'location': 'Munich_Germany',
        'image': 'img/ice-cream-parlor-336090_640.jpg',
        'description': '...immer einen Besuch wert'
    },

    {
        'icon': 'img/castle-2055197_640.png',
        'author': 'Schloß_Donnersturm',
        'location': '',
        'image': 'img/castle-4261029_640.jpg',
        'description': 'Schloß_Donnersturm: über 1000000 Besucher jährlich...'
    },

    {
        'icon': 'img/woman-6296048_640.jpg',
        'author': 'sisi_chopper',
        'location': 'Alabama',
        'image': 'img/motorcycle-1148963_640.jpg',
        'description': 'Best bike ever'
    },

    {
        'icon': 'img/silhouette-2860007_640.png',
        'author': 'mike_theBody',
        'location': 'Graz',
        'image': 'img/man-3563462_640.jpg',
        'description': 'mike_theBody:  So war das Leben...'
    },

    {
        'icon': 'img/bulli-4288994_640.jpg',
        'author': 'OldtimerTreff_Oldenstein',
        'location': '',
        'image': 'img/oldtimer-1197800_640.jpg',
        'description': ' Seit 80 Jahren eine unvergessliche Schönheit'
    },

    {
        'icon': 'img/environmental-protection-326923_640.jpg',
        'author': 'Naturfreunde_Niedergries',
        'location': 'Waldkirchen',
        'image': 'img/lake-1679708_640.jpg',
        'description': 'Naturfreunde_Niedergries: So atemberaubend schön ist unsere Natur'
    },


];
/**
 * draws all posts
 */
function drawPostContainer() {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        document.getElementById('postContainer').innerHTML += `
        <div class ="post">
          <div class="headArea">
            <div class ="authorBox">
                <div class="image img_post">
                  <img class ="imageSelf" src="${post['icon']}">
                </div>
                <div class="authorInfo">
                    <span><b>${post['author']}</b></span></br>
                    <span>${post['location']}</span>
                 </div>
            </div>
             <div>
                <span><b>...</b></span>
             </div>
          </div>
          <div class="pictureContainer">
            <img class="picture" src="${post['image']}">
          </div>
          <div class ="footerArea">
            <div class="iconContainerFooterArea">
                <img src="img/favorite-4-32.png" class="icon"/>
                <img src="img/comments-32.png" class="icon"/>
                <img src="img/paper-plane-32.png" class="icon"/>
            </div>
            <div class="likeNumber">
                <span >Gefällt  1000 Mal</span>
            </div>
            <div class="description">
                <span>${post['description']}</span>
            </div>
            <div class= "description" id="newComments${i}">

            </div>
            <div id ="commentContainer${i}">
                <span id="comment${i}" class ="comment plane" onclick="openCommentBox(${i})">Kommentar hinzufügen...</span>
                <div id ="newCommentContainer${i}" style="display: none">
                  <input id="newComment${i}" class="comment" type="text" size= 50/>
                  <img src="img/paper-plane-32.png" class="icon plane" onclick="addComment(${i})"/>
                </div>
            </div>
          </div>
       </div>

     `
    }

}

/**
 * opens page for create a new post
 */
function openNewPostDialog() {
    document.getElementById('mainSite').style.display = "none";
    document.getElementById('newPostSite').style.display = "flex";
}

/**
 * add a new post
 */

function addPost() {
    let name = document.getElementById('newPostName').value;
    let location = document.getElementById('newPostLocation').value;
    let description = document.getElementById('newPostDescription').value;
    document.getElementById('newPostName').value = "";
    document.getElementById('newPostLocation').value = "";
    document.getElementById('newPostDescription').value = "";
    posts.push({ 'icon': '', 'author': name, 'location': location, 'image': '', 'description': description });
    document.getElementById('postContainer').innerHTML = '';
    drawPostContainer();
    document.getElementById('mainSite').style.display = "flex";
    document.getElementById('newPostSite').style.display = "none";
}

/**
 * 
 * @param {integer} index of the selected Post to add a new comment
 */
function openCommentBox(index) {
    document.getElementById('comment' + index).style.display = "none";
    document.getElementById('newCommentContainer' + index).style.display = "flex";
}

/**
 * add a new comment
 * @param {integer} index of the selected Post to add a new comment
 */
function addComment(index) {
    let newComment = document.getElementById('newComment' + index).value;
    document.getElementById('newComment' + index).value = "";
    document.getElementById('newComments' + index).innerHTML += `
    <div class ="setComment">
    Adriano: ${newComment}
    </div>
    `;
    document.getElementById('newCommentContainer' + index).style.display = "none";
    document.getElementById('comment' + index).style.display = "flex";
}
/**
 * adds a classlist
 */
function showRespoMenu() {
    document.getElementById('respoMenu').classList.add('show-overlay-menu');
}

/**
 * remove a classlist
 */
function closeRespoMenu() {
    document.getElementById('respoMenu').classList.remove('show-overlay-menu');
}

/**
 * search a post
 */
function findPost() {
    let search = document.getElementById('input').value;
    search = search.toLowerCase();
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        if (post['author'].toLowerCase().includes(search)) {
            document.getElementById('postContainer').innerHTML ='';
            document.getElementById('postContainer').innerHTML += `
        <div class ="post">
          <div class="headArea">
            <div class ="authorBox">
                <div class="image img_post">
                  <img class ="imageSelf" src="${post['icon']}">
                </div>
                <div class="authorInfo">
                    <span><b>${post['author']}</b></span></br>
                    <span>${post['location']}</span>
                 </div>
            </div>
             <div>
                <span><b>...</b></span>
             </div>
          </div>
          <div class="pictureContainer">
            <img class="picture" src="${post['image']}">
          </div>
          <div class ="footerArea">
            <div class="iconContainerFooterArea">
                <img src="img/favorite-4-32.png" class="icon"/>
                <img src="img/comments-32.png" class="icon"/>
                <img src="img/paper-plane-32.png" class="icon"/>
            </div>
            <div class="likeNumber">
                <span >Gefällt  1000 Mal</span>
            </div>
            <div class="description">
                <span>${post['description']}</span>
            </div>
            <div class= "description" id="newComments${i}">

            </div>
            <div id ="commentContainer${i}">
                <span id="comment${i}" class ="comment plane" onclick="openCommentBox(${i})">Kommentar hinzufügen...</span>
                <div id ="newCommentContainer${i}" style="display: none">
                  <input id="newComment${i}" class="comment" type="text" size= 50/>
                  <img src="img/paper-plane-32.png" class="icon plane" onclick="addComment(${i})"/>
                </div>
            </div>
          </div>
       </div>

     `

        }
    }
}