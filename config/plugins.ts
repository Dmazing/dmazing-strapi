export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          // Optional: Configure upload options
          folder: 'strapi-uploads', // Cloudinary folder name
          use_filename: true,
          unique_filename: false,
          overwrite: false,
          resource_type: 'auto', // Automatically detect file type
          // You can add transformations here
          transformation: [
            {
              quality: 'auto',
              fetch_format: 'auto'
            }
          ]
        },
        uploadStream: {
          folder: 'strapi-uploads',
          use_filename: true,
          unique_filename: false,
          overwrite: false,
          resource_type: 'auto',
        },
        delete: {
          // Configuration for deleting files
          invalidate: true,
        },
      },
    },
  },
});
