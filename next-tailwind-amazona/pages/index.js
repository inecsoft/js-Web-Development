import Image from 'next/image';
import crypto from 'crypto';
import { Bucket } from 'sst/node/bucket';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return <Layout title='Home Page'>Home page</Layout>;
}

export async function getServerSideProps() {
  const command = new PutObjectCommand({
    ACL: 'public-read',
    Key: crypto.randomUUID(),
    Bucket: Bucket.public.bucketName,
  });
  const url = await getSignedUrl(new S3Client({}), command);

  return { props: { url } };
}
