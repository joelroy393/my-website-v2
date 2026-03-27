/**
 * main.js
 * App init — includes blog modal logic, smooth scroll, and year update.
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Full Blog Content Data
  // 1. Full Blog Content Data
  const blogData = {
    'pico-ctf': {
      title: 'picoCTF 2026: Tactical Analysis',
      html: `
        <p>Ranking in the <strong>top 500 out of 9,000+ teams</strong> was a massive win for my 2026 season. It moved me from just "using tools" to actually understanding the underlying vulnerabilities through relentless trial and error.</p>
        
        <h3>The 1.5-Hour "Ghost" Lead:</h3>
        <p>I remember one specific challenge where I spent nearly 90 minutes trying to gain access to a service. I was rotating through <strong>Hydra</strong> flags and <strong>smbclient</strong> commands, convinced I had the wrong wordlist or that my <strong>Python exploit</strong> was buggy. I was staring at the terminal, getting increasingly frustrated as my <strong>netcat</strong> listeners stayed silent.</p>

        <p>The reality? The machine instance had expired halfway through my session. When I relaunched the target, it gave me a brand-new IP address, but I was still hammering the old one in my scripts. I was effectively attacking a "ghost." It was a humbling lesson: always verify your environment before you start troubleshooting your code. Those two hours of "failure" taught me more about session persistence and infrastructure than any tutorial ever could.</p>

        <h3>Technical Deep-Dives:</h3>
        <p>Throughout the competition, I moved beyond basic scans into complex exploitation layers that tested my knowledge of system internals:</p>
        <ul>
          <li><strong>Web Exploitation:</strong> I identified and exploited <strong>SSTI (Server-Side Template Injection)</strong> vulnerabilities. This involved injecting payloads into template engines to bypass filters and eventually gain <strong>Remote Code Execution (RCE)</strong> on the server.</li>
          <li><strong>Binary Exploitation:</strong> One of the highlights was working through <strong>Buffer Overflows</strong>. I had to manually calculate the stack offsets and craft a specific payload to overwrite the return address—seeing that memory corruption actually work in the stack is a unique feeling.</li>
          <li><strong>Network Recon:</strong> Used <strong>nmap</strong> to map attack surfaces and <strong>sqlmap</strong> to test database vulnerabilities before moving into manual terminal work.</li>
        </ul>

        <div class="modal-media">
          <div class="terminal-box" style="background: #1a1b26; color: #a9b1d6; padding: 1rem; border-radius: 12px; font-family: 'Courier New', monospace; border: 1px solid #414868; box-shadow: inset 0 0 10px rgba(0,0,0,0.5);">
            <div style="color: #73daca;"># Instance expired; updating TARGET_IP in scripts...</div>
            <div style="color: #bb9af7;">$ export TARGET_IP=10.10.x.x</div>
            <div style="color: #73daca;">$ python3 ssti_payload.py --target $TARGET_IP</div>
            <div style="color: #e0af68;">[+] Shell stabilized via netcat. Access granted.</div>
          </div>
        </div>

        <h3>The Tactical Toolkit:</h3>
        <ul class="specs-grid">
          <li><strong>Exploitation:</strong> sqlmap, hydra, hashdump, smbclient</li>
          <li><strong>File Sharing:</strong> netcat, python3 -m http.server</li>
          <li><strong>Forensics:</strong> Wireshark (Reconstructing corrupted disk headers to retrieve flags)</li>
          <li><strong>Wordlists:</strong> rockyou.txt (The classic for a reason)</li>
        </ul>

        <p>Being part of the <strong>UWindsor Cybersecurity Club</strong> has been vital. It’s a space where I can dive into these "rabbit holes" with others, learning that in security, the most embarrassing mistakes are often the ones that teach you the most.</p>
      `
    },
    'pc-build': {
      title: 'Project "Royster": The Market Arbitrage Build',
      html: `
        <p>Building a high-end rig in 2026 isn't just about cable management; it's about <strong>market timing</strong>. While the "RAM crisis" was driving local prices into the stratosphere, I managed to build a beast by playing the global supply chain like a piano.</p>
        
        <h3>The High-Stakes Hunt:</h3>
        <p>I spent weeks with 15 tabs open, refreshing stock alerts until my eyes blurred. I eventually took a calculated risk and pivoted to the global market, snagging a legendary <strong>AliExpress bundle</strong>: the <strong>Ryzen 7 7800X3D</strong>, a B650 motherboard, and 32GB of CL36 RAM.</p>

        <p>The anxiety was real—waiting for high-end silicon to cross the ocean while prices spiked 20% weekly was a gamble. But the "hacker" mindset of verifying sellers paid off. To complete the heist, I managed to snag an <strong>Asus Prime RTX 5070 Ti on Amazon exactly at MSRP</strong>, dodging the scalpers entirely. Today, this exact setup would cost <strong>at least $1,500 more</strong>. It wasn't just a build; it was a $1,500 win against the market.</p>

        <div class="modal-media">
          <div class="build-image-wrapper" style="border: 1px solid var(--color-border); border-radius: 16px; overflow: hidden; margin-bottom: 1.5rem; background: #1a1b26;">
            <img src="assets/images/build-photo.jpg" alt="Project Royster Internals" style="width: 100%; height: auto; display: block; object-fit: cover;">
          </div>

          <div class="build-video-wrapper" style="border: 1px solid var(--color-accent); border-radius: 16px; overflow: hidden; background: #000; margin-bottom: 1.5rem; box-shadow: 0 0 20px rgba(167, 139, 250, 0.15); line-height: 0;">
            <video 
              autoplay 
              muted 
              loop 
              playsinline
              poster="assets/images/build-poster.jpg"
              style="width: 100%; height: auto; display: block; aspect-ratio: auto;"
            >
              <source src="assets/videos/pc-build.mp4" type="video/mp4">
            </video>
          </div>
        </div>

        <h3>The "Dual-Threat" Workstation:</h3>
        <p>This machine serves two masters: <strong>High-End Gaming</strong> and <strong>Heavy-Duty Cybersecurity Labs</strong>.</p>
        
        <p>The 7800X3D’s <strong>3D V-Cache</strong> is the secret weapon—it provides a massive boost in gaming performance and ensures zero stutters in even the most demanding titles. In the lab, it allows me to host a <strong>full "Attacker vs. Defender" environment</strong>—running a Kali VM, a Windows Server target, and a SIEM instance—all while my Java IDE compiles in the background without a hint of lag.</p>
        
        <ul class="specs-grid">
          <li><strong>CPU:</strong> AMD Ryzen 7 7800X3D (AliExpress Bundle Win)</li>
          <li><strong>GPU:</strong> Asus Prime NVIDIA RTX 5070 Ti (Amazon MSRP Snag)</li>
          <li><strong>Cooler:</strong> Thermalright 240mm AIO (Keeping the V-Cache chilled)</li>
          <li><strong>PSU:</strong> 1000W MSI MPG (Gold Rated / Future-Proof Headroom)</li>
          <li><strong>RAM:</strong> 32GB DDR5 6000MT/s CL36</li>
          <li><strong>Storage:</strong> 1TB + 2TB Gen4 NVMe + 1TB SATA3 SSD</li>
          <li><strong>Market Win:</strong> Secured ~$1,500 under current market value</li>
        </ul>

        <p><strong>The Takeaway:</strong> In tech, sometimes the best exploit isn't in the code—it's in the supply chain. This rig is the hardware backbone of everything I build, play, and break.</p>
      `
    },
    'home-lab': {
      title: 'Legacy Hardware: The DDR3 Lab',
      html: `
        <p>This project proved that you don't need a $4k rig to learn networking. It all started when my old DDR3 laptop finally hit a wall—it was stuttering, choppy, and taking a painful <strong>5+ minutes just to boot</strong>.</p>
        
        <h3>The Resurrection:</h3>
        <p>After upgrading to a powerful DDR5 gaming machine, I couldn't just let the old laptop collect dust. I started experimenting with <strong>ChromeOS Flex</strong>; it was smooth, but way too restrictive for what I wanted to do. I needed more control. I cycled through various Linux distros before settling on <strong>Ubuntu</strong> for its stability.</p>

        <h3>Stripping it Down:</h3>
        <p>Even with Linux, the desktop GUI was eating too many resources. To make it truly efficient, I wiped the drive and installed <strong>Ubuntu Server Edition</strong>. No interface, no mouse—just a blinking cursor. This was the turning point where I had to master the command line and manage everything via <strong>SSH</strong> from my new laptop.</p>

        <div class="modal-media">
          <div class="terminal-box" style="background: #1a1b26; color: #a9b1d6; padding: 1rem; border-radius: 12px; font-family: 'Courier New', monospace; border: 1px solid #414868;">
            <div style="color: #bb9af7;">royster393@Ubuntu:~$ uptime</div>
            <div style="color: #73daca;">15:24:02 up 42 days, 23:11, 1 user, load average: 0.08, 0.03, 0.01</div>
          </div>
        </div>

        <h3>Services & Impact:</h3>
        <p>What started as a "dead" laptop became a central hub for my digital life. I used it to host:</p>
        <ul>
          <li><strong>Media Hosting:</strong> Running <strong>Plex</strong> to stream my library across the house.</li>
          <li><strong>Private Cloud:</strong> Setting up alternatives to mainstream cloud services for my files.</li>
          <li><strong>Web Hosting:</strong> Experimenting with hosting my own local websites and dev environments.</li>
          <li><strong>Bash Automation:</strong> Writing custom scripts to handle automated backups and system health checks.</li>
        </ul>
        
        <p><strong>The Lesson:</strong> Resource management is everything. When you only have 8GB of RAM and an old CPU, every process counts. This project taught me how to squeeze every bit of power out of hardware through <strong>Linux optimization</strong> and <strong>SSH-based management</strong>.</p>
      `
    },
    'journey': {
      title: 'Kuwait to Windsor: The Transition',
      html: `
        <p>Moving from Kuwait to Canada for CS was a calculated risk. It forced me to adapt to a new tech landscape and academic culture at UWindsor.</p>
        
        <h3>The Cultural Shift:</h3>
        <p>Back in Kuwait, my tech circle was small. Coming to Windsor opened up a massive community of like-minded hackers and devs. It taught me that technical skill is only half the battle; the ability to collaborate on Agile teams and compete in international CTFs is what really moves the needle.</p>
        
        <p><strong>The Impact:</strong> This journey defined my "hacker" mindset—always being the outsider looking in, finding the gaps, and building something better.</p>
      `
    }
  };

  // 2. Modal Logic
  const modal = document.getElementById('blogModal');
  const modalBody = document.getElementById('modalBody');
  const closeBtn = document.querySelector('.modal-close');

  if (modal && modalBody) {
    document.querySelectorAll('.blog-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-post');
        if (blogData[id]) {
          modalBody.innerHTML = `<h2>${blogData[id].title}</h2>${blogData[id].html}`;
          modal.classList.add('active');
          document.body.style.overflow = 'hidden'; // Lock background scroll
        }
      });
    });

    closeBtn?.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto'; // Unlock scroll
    });

    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // 3. Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // 4. Hero CTA buttons
  const workBtn = document.querySelector('.btn-primary');
  const blogBtn = document.querySelector('.btn-ghost');

  workBtn?.addEventListener('click', () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  });

  blogBtn?.addEventListener('click', () => {
    document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' });
  });

  // 5. Footer Update
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  console.log('%c Joel Roy · joelroy393.com ', 'background:#a78bfa;color:#0d0b14;font-family:monospace;font-size:14px;padding:4px 8px;border-radius:4px;');
});