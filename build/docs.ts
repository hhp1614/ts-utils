import fs from 'fs-extra';

// 移动文档到 page 目录
async function docs(): Promise<void> {
  await fs.emptyDir('./docs');
  await fs.move('./vuepress/.vuepress/dist', './docs', { overwrite: true });
}

docs().catch(err => {
  console.log(err);
});
