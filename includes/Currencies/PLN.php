<?php

namespace Currencies;
use Amount;

class PLN implements FiatMeta {
	use Common;
	
	public function getSymbol() {
		return 'zł';
	}
	
	public function getDenominations() {
		return [
			1 => new Amount('10'),
			2 => new Amount('20'),
			3 => new Amount('50'),
			4 => new Amount('100'),
		];
	}
}

