/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  env: {
    MONGO_URI:
      'MONGO_URI=mongodb+srv://jeeasistio:jeeasistio@cluster0.et8sn.mongodb.net/coffee?retryWrites=true&w=majority',
    GOOGLE_USER: 'nescoffee.app@gmail.com',
    GOOGLE_PASS: 'nescoffee21232',
    ADMIN_USER: 'jeeasistio08@gmail.com'
  },
  images: {
    domains: ['i.ibb.co', 'source.unsplash.com']
  }
}
