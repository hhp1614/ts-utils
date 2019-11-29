import fs from 'fs-extra';

// 移动文档到 page 目录
async function docs(): Promise<void> {
  await fs.emptyDir('./docs/page');
  await fs.move('./docs/.vuepress/dist', './docs/page', { overwrite: true });
}

docs().catch(err => {
  console.log(err);
});
