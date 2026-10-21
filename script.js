document.querySelector('#contact-form').addEventListener('submit',function(e){e.preventDefault();const f=new FormData(this);const subject=encodeURIComponent('お問い合わせ：'+f.get('subject'));const body=encodeURIComponent('お名前：'+f.get('name')+'\nメール：'+f.get('email')+'\n\n'+f.get('message'));location.href='mailto:hello@example.com?subject='+subject+'&body='+body;});
document.querySelectorAll('[data-unset-link]').forEach(function(link){
  link.addEventListener('click',function(event){
    event.preventDefault();
    alert(this.dataset.unsetLink+' がまだ設定されていません。公開前に index.html の href を実際のURLに変更してください。');
  });
});
