import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

const Blocksview = (ckeditor) => {
  const content: BlocksContent = ckeditor.ckeditor;
  const content2: BlocksContent = [
    {
      type: 'paragraph',
      children: [{ type: 'text', text: 'A simple paragraph' }],
    },
  ];
  console.log(content)
  console.log(content2)
  return <BlocksRenderer content={content} />;
};

export default Blocksview;
