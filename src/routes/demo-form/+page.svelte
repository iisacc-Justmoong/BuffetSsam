<script>
	import RequestForm from '$lib/components/blocks/RequestForm.svelte';

	const handleSubmit = (event) => {
		console.log('Demo form submitted', event.detail);
	};
</script>

<svelte:head>
	<title>Demo Form</title>
</svelte:head>

<section class="section">
	<RequestForm
		kicker="Demo Request"
		title="현황을 공유하고 맞춤 데모를 받아보세요"
		lead="팀 규모, 목표, 일정만 알려주시면 24시간 이내에 커리큘럼 샘플과 견적 가이드를 보냅니다."
		checklist={[
			'성과 목표와 우선순위',
			'대상 인원/직무와 일정',
			'희망 예산 범위'
		]}
		highlights={[
			{ label: '데모 전달', value: '24시간 내', hint: '핵심 KPI와 커리큘럼 샘플 포함' },
			{ label: '진단 미팅', value: '30분 콜', hint: '필요 시 현장 방문 브리핑' }
		]}
		submitLabel="데모 요청하기"
		on:submit={handleSubmit}
	/>
</section>
