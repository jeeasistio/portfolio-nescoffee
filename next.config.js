/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      'MONGO_URI=mongodb+srv://jeeasistio:jeeasistio@cluster0.et8sn.mongodb.net/coffee?retryWrites=true&w=majority'
  },
  images: {
    domains: ['i.ibb.co', 'source.unsplash.com']
  }
}
