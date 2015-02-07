<?php

namespace Controllers;

use Template;
use Admin as AdminConfig;

class App implements Controller {
	public function execute(array $matches, $url, $rest) {
		$admin = AdminConfig::volatileLoad();
		$contactInfo = $admin->getConfig()->getContactInformation();
		header("Content-Security-Policy: ". 
			implode("; ", [
				"default-src 'self'",
				"script-src 'self' 'unsafe-eval'",
				"object-src 'none'",
				"media-src 'self' mediastream:",
				"report-uri /report;",
			])
		);
		$tmpl = new Template('app');
		$tmpl->render([]);
		return true;
	}
}
