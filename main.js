

let btn = document.getElementById("btn")
let username = document.getElementById("username")
let textarea = document.getElementById("textarea")
let img = document.getElementById("img")
let userPost = document.getElementById("user-post")

btn.addEventListener("click", () => {




    let username1 = username.value.trim();
    let textarea1 = textarea.value.trim();
    let img1 = img.src

    if (username1.length < 4) {
        alert("username has to be more than > 3 characters");
        return;
    }

    if (textarea1.length < 6) {
        alert("text has to be longer than > 5 characters");
        return;
    }

    if (!img1) {
        alert("image is required");
        return;
    }
    fetch(`https://68219a21259dad2655afc28a.mockapi.io/post?username=${encodeURIComponent(username1)}`)
        .then((res) => res.json())
        .then((matches) => {
            if (matches.length > 0) {
                alert("username exist already");
                return;
            }
        })
    fetch('https://68219a21259dad2655afc28a.mockapi.io/post',
        {

            method: 'POST',
            body: JSON.stringify({
                username: username.value,
                textarea: textarea.value,
                img: img.src

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

)



fetch('https://68219a21259dad2655afc28a.mockapi.io/post')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            let text = document.createElement("h4")
            let post = document.createElement("p")
            let img = document.createElement("img")
            let del = document.createElement("button")

            text.className = "text"
            img.className = "img"
            del.className = "btn"


            text.innerText = `The name is: ${element.username}`
            post.innerText = element.textarea
            img.src = element.img
            del.innerText = "delete"


            del.addEventListener("click", () => {
                fetch(`https://68219a21259dad2655afc28a.mockapi.io/post/${element.id}`, {
                    method: 'DELETE',
                })
                    .then(() => {
                        text.remove()
                        post.remove()
                        img.remove()
                        del.remove()
                    })
            })

            userPost.appendChild(text)
            userPost.appendChild(post)
            userPost.appendChild(img)
            userPost.appendChild(del)
        });

    });

