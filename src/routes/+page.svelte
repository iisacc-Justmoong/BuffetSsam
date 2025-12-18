<script>
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Stat from '$lib/components/ui/Stat.svelte';
	import RequestForm from '$lib/components/blocks/RequestForm.svelte';
	import Panel from '$lib/components/blocks/Panel.svelte';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';

	const handleDemoSubmit = (event) => {
		console.log('Homepage demo form', event.detail);
	};
</script>

<section class="hero">
	<Badge>Education Consulting</Badge>
	<h1 class="hero__title">조직의 학습 경험을 설계하는 맞춤형 교육컨설팅</h1>
	<p class="hero__lead">
		전략과 역량 데이터를 기반으로 교육 과제를 진단하고, 실행 가능한 프로그램과 성과
		측정까지 연결합니다.
	</p>
	<div class="hero__actions">
		<Button href="/contact">무료 진단 신청</Button>
		<Button variant="ghost" href="/solutions">솔루션 살펴보기</Button>
	</div>
	<div class="stats">
		<Stat value="180+" label="누적 프로젝트" />
		<Stat value="96%" label="고객 만족도" />
		<Stat value="68%" label="현업 적용률" />
		<Stat value="24명" label="전문 컨설턴트" />
	</div>
</section>

<section class="section">
	<RequestForm
		kicker="상담 요청"
		title="교육 프로젝트를 24시간 내 실행 가능한 안으로 바꿔드립니다"
		lead="현업 과제, 일정, 예산만 남겨주시면 맞춤형 러닝 패키지와 성과지표 초안을 보내드립니다."
		checklist={[
			'진단 결과 기반 커리큘럼 2안 제안',
			'운영 계획·참여 독려 메시지 포함',
			'예산/일정에 맞춘 단계별 옵션'
		]}
		highlights={[
			{ label: '평균 응답', value: '4.8시간', hint: '프로젝트 전담 컨설턴트 배정' },
			{ label: '제안 패키지', value: '로드맵 + 견적', hint: 'KPI/운영 리소스 포함' }
		]}
		submitLabel="상담 요청 보내기"
		on:submit={handleDemoSubmit}
	/>
</section>

<section class="section">
	<SectionHeader
		kicker="Overview"
		title="교육 성과를 만드는 핵심 포인트"
		lead="조직의 상황을 빠르게 파악하고 실행 가능한 로드맵으로 연결합니다."
	/>
	<div class="split">
		<Panel
			title="진단-설계 연결"
			text="데이터 기반으로 현 상황을 정의하고 목표에 맞는 학습 여정을 설계합니다."
			items={['직무별 역량 매핑', '핵심 과제 우선순위', '성과 지표 합의']}
		/>
		<Panel
			accent={true}
			title="현장 실행 지원"
			text="실행 단계에서 운영 부담을 줄이고 참여를 높입니다."
			items={['강사·콘텐츠 큐레이션', '운영 체크리스트 제공', '참여 리마인드 메시지']}
		/>
	</div>
</section>
