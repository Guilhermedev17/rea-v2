export default {
    theme: {
        extend: {
            textShadow: {
                sm: '1px 1px 2px rgba(0,0,0,0.2)',
                md: '2px 2px 4px rgba(0,0,0,0.3)',
            },
        },
    },
    plugins: [
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            )
        },
    ],
};
