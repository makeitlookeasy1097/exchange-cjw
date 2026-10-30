# 무료 공개 배포 안내

이 프로젝트는 영상 네 개를 YouTube 삽입 플레이어로 재생하고, 나머지 작은 MP4 네 개는 GitHub Pages에서 직접 제공합니다. 작은 MP4 네 개의 합계는 약 10.5MB이고 각각 100MB보다 작아 별도 R2 없이 올릴 수 있습니다. 큰 원본 MP4 네 개는 컴퓨터에 보존하되 GitHub 업로드에서 제외합니다.

## GitHub Pages 게시

1. GitHub에 새 **공개 저장소**를 만듭니다. 예를 들어 저장소 이름을 `pota-phone`으로 정하면 공개 주소는 `https://깃허브아이디.github.io/pota-phone/` 형식입니다.
2. 이 프로젝트 파일을 저장소에 올립니다. `node_modules`, `.next`, `out`은 올리지 않습니다. 저장소 루트의 `.gitignore`가 큰 MP4는 제외하고, `reels_v1.mp4`, `reels_v2.mp4`, `사진 34.mp4`, `이안 편의점.mp4`만 포함합니다.
3. 저장소에서 **Settings → Pages → Build and deployment → Source**를 `GitHub Actions`로 선택합니다.
4. `main` 브랜치에 올리면 `.github/workflows/deploy-pages.yml`이 자동으로 빌드하고 게시합니다. 진행 상태는 **Actions** 탭에서 확인할 수 있습니다.

## 주의

- 공개 저장소의 사진과 영상은 누구나 볼 수 있습니다. 공개해도 되는 자료만 올리세요.
- `.gitignore`는 이미 Git에 등록된 MP4를 저장소 기록에서 제거하지 않습니다. 새 저장소를 만들 때 처음부터 큰 MP4가 제외되는지 확인하세요.
- Pages용 빌드에는 `NEXT_OUTPUT_EXPORT=true`가 필요합니다. 일반 로컬 개발은 기존처럼 `npm run dev`로 실행합니다.
