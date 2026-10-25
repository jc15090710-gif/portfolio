document.querySelectorAll('[data-unset-link]').forEach(function(link){link.addEventListener('click',function(event){event.preventDefault();alert(this.dataset.unsetLink+' がまだ設定されていません。');});});
