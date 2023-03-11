var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/stefanozuca/Portfolio.git', // Update to point to your repository  
        user: {
            name: 'Stefano Zucarelli', // update to use your name
            email: 'stefanozuca@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)