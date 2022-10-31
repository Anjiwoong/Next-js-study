import styles from './posts-grid.module.css';
import PostsItem from './posts-item';

const PostsGrid = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map(post => (
        <PostsItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
