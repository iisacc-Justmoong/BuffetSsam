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
	<Badge>Credit Bank Consulting</Badge>
	<h1 class="hero__title">학점은행제 학위 취득을 끝까지 책임지는 맞춤 컨설팅</h1>
	<p class="hero__lead">
		목표 학위·전공과 보유 학점을 기준으로 자격증, 독학사, 온라인 과목을 조합해 최단
		기간 로드맵과 행정 절차까지 설계합니다.
	</p>
	<div class="hero__actions">
		<Button href="/contact">무료 상담 요청</Button>
		<Button variant="ghost" href="/solutions">솔루션 살펴보기</Button>
	</div>
	<div class="stats">
		<Stat value="320+" label="연간 상담/설계" />
		<Stat value="98%" label="학위 취득 성공률" />
		<Stat value="1.2학기" label="평균 기간 단축" />
		<Stat value="12명" label="전담 컨설턴트" />
	</div>
</section>

<section class="section">
	<RequestForm
		kicker="학점은행제 상담"
		title="학위·일정에 맞는 학점 설계안을 24시간 내 제안합니다"
		lead="목표 전공, 보유 학점, 희망 기간을 알려주시면 학점 인정 경로와 수강 계획을 세워드립니다."
		checklist={[
			'목표 학위/전공 맞춤 학습 경로 2안',
			'전적대·자격·독학사 활용 학점 계산',
			'수강·신청·보고 일정표 제공'
		]}
		highlights={[
			{ label: '평균 응답', value: '4.5시간', hint: '전담 컨설턴트 1:1 배정' },
			{ label: '제안 포함', value: '학습·행정 체크리스트', hint: '등록/인정 절차 안내' }
		]}
		submitLabel="학점 설계 요청"
		on:submit={handleDemoSubmit}
	/>
</section>

<section class="section">
	<SectionHeader
		kicker="핵심 포인트"
		title="학점은행제 성공률을 높이는 컨설팅 포인트"
		lead="자격증, 독학사, 온라인 과목을 조합해 기간과 비용을 최적화합니다."
	/>
	<div class="split">
		<Panel
			title="학점 로드맵 설계"
			text="목표 학위에 맞는 학점 조합과 학기별 일정을 설계합니다."
			items={['전적대/자격/독학사 학점 인정 계산', '학기별 수강·시험 일정표', '최소 비용·기간 플랜']}
		/>
		<Panel
			accent={true}
			title="행정·제출 지원"
			text="등록부터 학점 인정, 학위 신청까지 놓치지 않게 관리합니다."
			items={[
				'학습자 등록 및 학점인정 신청 가이드',
				'필수 서류 점검·제출 리마인드',
				'학위 신청까지 단계별 체크리스트'
			]}
		/>
	</div>
</section>
