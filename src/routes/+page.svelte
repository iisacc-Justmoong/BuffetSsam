<script>
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Stat from '$lib/components/ui/Stat.svelte';
	import Card from '$lib/components/blocks/Card.svelte';
	import Panel from '$lib/components/blocks/Panel.svelte';
	import Quote from '$lib/components/blocks/Quote.svelte';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import Step from '$lib/components/blocks/Step.svelte';

	const sectionHeaders = {
		solutions: {
			kicker: 'Solutions',
			title: '성과 중심 교육컨설팅',
			lead: '조직의 목표를 학습 목표로 전환해 실제 성과로 이어지는 교육 체계를 만듭니다.'
		},
		programs: {
			kicker: 'Programs',
			title: '조직 상황에 맞춘 프로그램 라인업',
			lead: '리더십부터 직무 역량, 조직문화까지 맞춤 설계를 제공합니다.'
		},
		process: {
			kicker: 'Process',
			title: '프로세스는 4단계로 단순합니다',
			lead: '불필요한 리드타임을 줄이고 실행력을 높이는 흐름을 제안합니다.'
		},
		outcomes: {
			kicker: 'Outcomes',
			title: '성과를 수치로 확인합니다',
			lead: '학습 전환율, 현업 적용률, 팀 성과 변화를 함께 관리합니다.'
		}
	};

	const heroStats = [
		{ value: '180+', label: '누적 프로젝트' },
		{ value: '96%', label: '고객 만족도' },
		{ value: '68%', label: '현업 적용률' },
		{ value: '24명', label: '전문 컨설턴트' }
	];

	const solutionCards = [
		{
			tag: 'Diagnose',
			title: '교육 니즈 진단',
			meta: '전략과 직무 데이터를 연결해 핵심 과제를 정의합니다.',
			items: ['전략·직무별 역량 갭 분석', '인터뷰·설문 기반 진단', '우선순위 로드맵 설계']
		},
		{
			tag: 'Design',
			title: '러닝 경험 설계',
			meta: '학습 여정을 설계해 몰입과 전이를 높입니다.',
			items: ['성과 목표 및 평가 기준', '블렌디드 커리큘럼', '학습 여정 맵 구성']
		},
		{
			tag: 'Impact',
			title: '성과 정착',
			meta: '현업 적용까지 이어지는 운영 체계를 구축합니다.',
			items: ['현업 적용 프로젝트', '코칭·피드백 체계', '성과 리포트 제공']
		}
	];

	const programPanels = [
		{
			title: '핵심 역량 프로그램',
			text: '조직 규모와 직무 특성을 반영한 집중 프로그램.',
			items: ['리더십·매니저 역량', '신입·전환 교육', '세일즈·고객 경험']
		},
		{
			title: '운영 지원 서비스',
			text: '교육 운영과 평가를 함께 설계해 실행력을 높입니다.',
			items: ['강사·콘텐츠 매칭', '학습 운영 대행', 'LMS·데이터 리포팅'],
			accent: true
		}
	];

	const processSteps = [
		{
			title: '상담 및 진단',
			text: '현업 담당자 인터뷰와 데이터 분석으로 과제를 정의합니다.'
		},
		{
			title: '설계 및 제안',
			text: '성과 지표와 커리큘럼을 설계하고 일정·예산을 제안합니다.'
		},
		{
			title: '실행 및 운영',
			text: '교육 운영, 코칭, 학습 커뮤니티를 함께 지원합니다.'
		},
		{
			title: '효과 측정',
			text: '성과 분석과 개선 리포트로 다음 사이클을 연결합니다.'
		}
	];

	const outcomePanel = {
		title: '성과 측정 지표',
		text: '교육의 효과를 객관적으로 확인할 수 있는 지표를 제공합니다.',
		items: ['사전·사후 역량 평가', '현업 적용 과제 달성률', '참여·완주율 및 만족도']
	};

	const outcomeStats = [
		{ value: '92%', label: '완주율' },
		{ value: '23%', label: '평균 성과 향상' },
		{ value: '4.7점', label: '만족도' }
	];

	const outcomeQuotes = [
		{
			text:
				'프로젝트 리더가 교육 이후 실제 지표 개선을 이끌어냈습니다. 실행과 측정이 동시에 진행되어 신뢰도가 높았습니다.',
			meta: 'A기업 HRD 팀'
		},
		{
			text: '진단부터 운영까지 체계적이라 내부 리소스를 크게 줄일 수 있었습니다.',
			meta: 'B기업 인사팀'
		},
		{
			text: '직무별 역량 모델링이 특히 유용했고, 교육 이후 변화가 바로 보였습니다.',
			meta: 'C대학 산학협력단'
		}
	];
</script>

<main class="page">
	<header class="topbar">
		<div class="brand">
			<span class="brand__mark">E</span>
			<span class="brand__text">
				<span class="brand__name">버핏쌤의 에듀컨설팅</span>
				<span class="brand__meta">Education Consulting</span>
			</span>
		</div>
		<nav class="nav">
			<a href="#solutions">솔루션</a>
			<a href="#programs">프로그램</a>
			<a href="#process">프로세스</a>
			<a href="#outcomes">성과</a>
		</nav>
		<Button variant="outline" href="#contact">상담 예약</Button>
	</header>

	<section class="hero" id="top">
		<Badge>Education Consulting</Badge>
		<h1 class="hero__title">조직의 학습 경험을 설계하는 맞춤형 교육컨설팅</h1>
		<p class="hero__lead">
			전략과 역량 데이터를 기반으로 교육 과제를 진단하고, 실행 가능한 프로그램과 성과
			측정까지 연결합니다.
		</p>
		<div class="hero__actions">
			<Button href="#contact">무료 진단 신청</Button>
			<Button variant="ghost" href="#solutions">솔루션 살펴보기</Button>
		</div>
		<div class="stats">
			{#each heroStats as stat}
				<Stat {...stat} />
			{/each}
		</div>
	</section>

	<section class="section" id="solutions">
		<SectionHeader {...sectionHeaders.solutions} />
		<div class="card-grid">
			{#each solutionCards as card}
				<Card {...card} />
			{/each}
		</div>
	</section>

	<section class="section" id="programs">
		<SectionHeader {...sectionHeaders.programs} />
		<div class="split">
			{#each programPanels as panel}
				<Panel {...panel} />
			{/each}
		</div>
	</section>

	<section class="section" id="process">
		<SectionHeader {...sectionHeaders.process} />
		<div class="steps">
			{#each processSteps as step}
				<Step {...step} />
			{/each}
		</div>
	</section>

	<section class="section" id="outcomes">
		<SectionHeader {...sectionHeaders.outcomes} />
		<div class="split">
			<Panel {...outcomePanel} />
			<div class="stats">
				{#each outcomeStats as stat}
					<Stat {...stat} />
				{/each}
			</div>
		</div>
		<div class="quote-grid">
			{#each outcomeQuotes as quote}
				<Quote {...quote} />
			{/each}
		</div>
	</section>

	<section class="cta" id="contact">
		<Badge>Contact</Badge>
		<h2 class="cta__title">무료 진단으로 교육 성과를 시작하세요</h2>
		<p class="cta__lead">
			프로젝트 조건을 공유해 주시면 일주일 내 진단 결과와 맞춤 제안을 드립니다.
		</p>
		<div class="cta__actions">
			<Button href="mailto:hello@edubridge.co.kr">상담 요청</Button>
			<Button variant="ghost" href="#programs">소개서 요청</Button>
		</div>
		<div class="cta__meta">
			<span>전화 02-000-0000</span>
			<span>이메일 hello@edubridge.co.kr</span>
			<span>서울 강남구 테헤란로 123</span>
		</div>
	</section>

	<footer class="footer">
		<span>ⓒ 2025 에듀브릿지 컨설팅. All rights reserved.</span>
		<span>사업자등록번호 000-00-00000</span>
		<a href="#top">맨 위로</a>
	</footer>
</main>
