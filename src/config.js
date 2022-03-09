// config.js
module.exports = {
    github: {
        username: 'LockJL1234', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: ['LockJL1234.github.io'] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'Lock Jun Lin',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://LockJL1234.github.io',
        phone: '+6016-9026692',
        email: 'vash104@hotmail.com'
    },
    skills: [
        'Python',
        'C++',
        'SQL',
        'Java',
        'Jupyter Notebook',
        'Android Studio',
        'Microsoft Word',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Anaconda',
        'Spyder',
        'Virtual Machine',
    ],
    experiences: [
        { 
            company: 'Moge Tee',
            position: 'Tearista',
            from: 'May 2019',
            to: 'August 2019'
        }
    ],
    education: [
        { 
            institution: 'University of Wollongong Malaysia KDU University College',
            degree: 'Bachelor of Computer Science (Hons)',
            from: '2019',
            to: '2022'
        },
        { 
            institution: 'KDU University College, Glenmarie',
            foundation: 'Foundation in Arts and Technology',
            from: '2018',
            to: '2019',
        },
        { 
            institution: 'Sekolah Menengah Kebangsaana (SMK) Taman SEA',
            qualification: 'Sijil Pelajaran Malaysia (SPM)',
            from: '2013',
            to: '2017'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: '', // medium | dev.to
        username: '',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id or keep it empty
    },
    hotjar: {
        id: '', //  Please remove this and use your own id or keep it empty
        snippetVersion : 6
    },
    themeConfig: {
        default: 'Garden',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
