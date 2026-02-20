// Toggle Like
function toggleLike(btn) {
    const icon = btn.querySelector('i');
    btn.classList.toggle('liked');
    if (btn.classList.contains('liked')) {
        icon.className = 'fas fa-thumbs-up';
        btn.querySelector('span').textContent = 'أعجبني';
        showToast('😊 تم الإعجاب بالمنشور!');
    } else {
        icon.className = 'far fa-thumbs-up';
    }
}

// Post Modal
function openPostModal() {
    document.getElementById('postModal').classList.add('active');
    setTimeout(() => document.getElementById('postTextarea').focus(), 300);
}

function closePostModal(e) {
    if (!e || e.target === document.getElementById('postModal')) {
        document.getElementById('postModal').classList.remove('active');
        document.getElementById('postTextarea').value = '';
    }
}

// Publish Post
function publishPost() {
    const text = document.getElementById('postTextarea').value.trim();
    if (!text) {
        showToast('⚠️ اكتب شيئاً أولاً!');
        return;
    }
    const feed = document.querySelector('.feed');
    const createPost = document.querySelector('.create-post');
    const newPost = document.createElement('article');
    newPost.className = 'post card';
    newPost.style.animation = 'slideUp 0.3s ease';
    newPost.innerHTML = `
        <div class="post-header">
            <img src="https://ui-avatars.com/api/?name=Samir+Gad&background=1877f2&color=fff&size=46" alt="" class="post-avatar">
            <div class="post-meta">
                <div class="post-user-name">Samir Gad <span class="verified"><i class="fas fa-check-circle"></i></span></div>
                <div class="post-time"><i class="fas fa-globe-americas"></i> الآن</div>
            </div>
            <button class="post-options"><i class="fas fa-ellipsis-h"></i></button>
        </div>
        <div class="post-content"><p>${text.replace(/\n/g, '<br>')}</p></div>
        <div class="post-stats">
            <span><i class="fas fa-thumbs-up" style="color:#1877f2"></i> 0 إعجاب</span>
            <span>0 تعليق</span>
        </div>
        <div class="post-actions">
            <button class="action-btn like-btn" onclick="toggleLike(this)"><i class="far fa-thumbs-up"></i><span>أعجبني</span></button>
            <button class="action-btn"><i class="far fa-comment"></i><span>تعليق</span></button>
            <button class="action-btn"><i class="far fa-share-square"></i><span>مشاركة</span></button>
        </div>
    `;
    createPost.insertAdjacentElement('afterend', newPost);
    document.getElementById('postModal').classList.remove('active');
    document.getElementById('postTextarea').value = '';
    showToast('✅ تم نشر منشورك بنجاح!');
}

// Toggle Follow
function toggleFollow(btn) {
    if (btn.classList.contains('following')) {
        btn.classList.remove('following');
        btn.textContent = 'متابعة';
    } else {
        btn.classList.add('following');
        btn.textContent = 'تتابعه ✓';
        showToast('✅ تمت المتابعة بنجاح!');
    }
}

// Toast
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Keyboard shortcut
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePostModal();
});

// Active nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Active sidebar link
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
